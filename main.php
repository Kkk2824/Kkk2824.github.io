<?php
$servername = "127.0.0.1";
$username = "root";
$password = "123456";
$dbname = "53_com";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>

<?php
$sql = "SELECT * FROM demo_table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while ($row = $result->fetch_assoc()) {
    echo "ID: " . $row["ID"] . " - Time Used: " . $row["used_time"] . " - Accuracy: " . $row["accuracy"] . " - Submitted DateTime: " . $row["submitted_DataTime"] . "<br>";
  }
} else {
  echo "0 results";
}

$conn->close();
?>
