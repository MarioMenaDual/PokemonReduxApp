<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
/* Autenticacion via HTTP
$user = array_key_exists('PHP_AUTH_USER',$_SERVER) ? $_SERVER['PHP_AUTH_USER'] : '';
$pwd = array_key_exists('PHP_AUTH_PW',$_SERVER) ? $_SERVER['PHP_AUTH_PW'] : '';

if ($user !== 'mauro' || $pwd !== '1234') {
	die;
}
*/

/* Autenticacion via HMAC
if (!array_key_exists('HTTP_X_HASH',$_SERVER) ||
    !array_key_exists('HTTP_X_TIMESTAMP',$_SERVER) ||
    !array_key_exists('HTTP_X_UID',$_SERVER)) {
    die;
}

list($hash, $uid, $timestamp) = [
    $_SERVER['HTTP_X_HASH'],
    $_SERVER['HTTP_X_UID'],
    $_SERVER['HTTP_X_TIMESTAMP']
];

$secret = 'Sh!! No se lo cuentes a nadie!';

$newHash = sha1($uid.$timestamp.$secret);

if ($newHash !== $hash) {
    die;
}
*/

/* API
header( 'Content-Type: application/json' );

if ( !array_key_exists( 'HTTP_X_TOKEN', $_SERVER ) ) {

    die;
}

$url = 'https://'.$_SERVER['HTTP_HOST'].'/auth';

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_HTTPHEADER, [
    "X-Token: {$_SERVER['HTTP_X_TOKEN']}",
]);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
$ret = curl_exec( $ch );

if ( curl_errno($ch) != 0 ) {
    die ( curl_error($ch) );
}

if ( $ret !== 'true' ) {
    http_response_code( 403 );
    die;
}
*/


// definimos los recursos disponibles 
$allowedResourceTypes = [
    'books',
    'authors',
    'genres'
];

$resourceType = $_GET['resource_type'];

if( !in_array($resourceType, $allowedResourceTypes)){
    http_response_code( 400 );
    die;
}

// Defino los recursos
$books = [
    1 => [
        'titulo' => 'Lo que el viento se llevo',
        'id_autor' => 2,
        'id_genero' => 2,
    ],
    2 => [
        'titulo' => 'La Iliada',
        'id_autor' => 1,
        'id_genero' => 1,
    ],
    3 => [
        'titulo' => 'La Odisea',
        'id_autor' => 1,
        'id_genero' => 1,
    ],
];

// Se indica al cliente que lo que recibirá es un json
header('Content-Type: application/json');
// Levantamos el id del recurso buscado
$resourceId = array_key_exists('resource_id', $_GET) ? $_GET['resource_id']:'';

// Generamos la respuesta asumiendo que el pedido es correcto y devilvemos en formafo json
switch( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
        // en caso de que no pidan ningun recurso
         if ( empty( $resourceId ) ){
            echo json_encode( $books );
         }else{
             // si llegan a pedir un recurso en especifico
            if( array_key_exists( $resourceId, $books) ){
                echo json_encode( $books[ $resourceId ] );
            }
            else {
				http_response_code(404);
            }
        }
        break;
    case 'POST':
        $json = file_get_contents('php://input');
        $books[] = json_decode($json, true);
        // echo array_keys( $books )[count($books) -1];
        echo json_encode($books);
        break;
    case 'PUT':
         //validamos que el recurso buscado exista
         if (!empty($resourceId) && array_key_exists($resourceId, $books)){
            // Tomamos la entrada cruda
            $json = file_get_contents('php://input');
             // transformamos el json recibido a un nuevo elemento del arreglo
            $books[$resourceId] = json_decode($json, true);
            // Retornamos la coleccion modificada en formato json
            echo json_encode($books);
        }
        break;
    case 'DELETE':
        if ( !empty($resourceId) && array_key_exists( $resourceId, $books ) ) {
			unset( $books[ $resourceId ] );

            echo json_encode($books);
		}  

        break;
}




// Inicio el servidor en la terminal 1, aqui le asignamos el puerto 8000
// php -S localhost:8000 server.php

// Terminal 2 ejecutar 
// curl http://localhost:8000 -v
// curl http://localhost:8000/\?resource_type\=books
// curl http://localhost:8000/\?resource_type\=books | jq
// ver la comunicacion a través de los encabezados:
// $ curl http://localhost:8000/\?resource_type\=books -v > /dev/null
// consulta
//$curl "http://localhost:8000?resource_type=books&resource_id=1"
//curl -X 'POST' http://localhost:8000/books -d '{"titulo":"Nuevo Libro","id_autor":1,"id_genero":2}'
?>