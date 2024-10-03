<?php
include 'db-config.php';
try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $title = $_POST['title'];
        $content = $_POST['content'];

        $sql = "INSERT INTO websites (title, content) VALUES (:title, :content)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['title' => $title, 'content' => $content]);

        echo "<div style='text-align:center;'><h2>Website Saved Successfully!</h2>";
        echo "<p><a href='index.php'>Create Another Website</a></p></div>";
    }

} catch (PDOException $e) {
    die("Error: Could not connect to the database. " . $e->getMessage());
}
?>
