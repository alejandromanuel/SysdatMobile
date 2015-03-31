<?php 

//este es el file con los credenciales
$DB_HOST = '52.11.122.194';
$DB_USER = 'testuser';
$DB_PASS = 'dguptech';
$DB_NAME = 'testing9';

//funcion que se conecta a la base de datos
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);


//manejar el error!!!
  if ($mysqli->connect_errno) {
       echo 'ERROR: Could not connect to the database.';
        die();
    }

//query

//query
if (!($stmt = $mysqli->prepare("SELECT * from Activity"))) {
    echo "ERROR: Prepare failed: (" . $mysqli->error;
}


if (!$stmt->execute()) {
     echo "ERROR: Execute failed: (" . $stmt->error;
}

if (!($result = $stmt->get_result())) {
    echo "ERROR: Getting result set failed:" . $stmt->error;
}

$arr = array();
if($result->num_rows > 0) {
       while($row = $result->fetch_assoc()) {
                  $arr[] = $row;	
                }
                //end while
}

///convertir a json
echo $json_response = json_encode($arr);
//cerrar coneccion
mysqli_close($mysqli);
?>