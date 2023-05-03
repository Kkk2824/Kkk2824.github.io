<!-- // $dbhost = '127.0.0.1';  // mysql服务器主机地址
// $dbuser = 'root';            // mysql用户名
// $dbpass = 'wuone123';          // mysql用户名密码
// $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
// if(! $conn )
// { //
//     die('连接失败: ' . mysqli_error($conn));
// }
// echo '连接成功<br />';
// $sql = "CREATE TABLE runoob_tbl( ".
//         "runoob_id INT NOT NULL AUTO_INCREMENT, ".
//         "runoob_title VARCHAR(100) NOT NULL, ".
//         "runoob_author VARCHAR(40) NOT NULL, ".
//         "submission_date DATE, ".
//         "PRIMARY KEY ( runoob_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
// mysqli_select_db( $conn, 'RUNOOB' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('数据表创建失败: ' . mysqli_error($conn));
// }
// echo "数据表创建成功\n";
// mysqli_close($conn);  -->

<!-- // header('COntent-Type:text/html;charset=utf-8'); //设置页面编码,如果文件是gbk编码,则charset也应用gbk

//@表示如果出错了，不要报错，直接忽略

//参数：服务器地址，用户名和密码

// echo (!!@mysql_connect('localhost', 'root', 'wuone123')); //1


// $mysql_server_name = '127.0.0.1'; //mysql数据库服务器

// $mysql_username = 'root'; //mysql数据库用户名

// $mysql_password = 'kwuone123'; //mysql数据库密码,初始默认密码为空

// $mysql_database = 'demo_db'; //mysql数据库名
 -->


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
