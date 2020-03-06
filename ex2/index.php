<?php
$pdo = new PDO('mysql:host=localhost;dbname=mailer', 'root', '');

$sql = 'SELECT * FROM mail ORDER BY id DESC LIMIT 1';
$stmt = $pdo->prepare( $sql );
$stmt->execute();
$mail = $stmt->fetch();
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Boite mail</title>

        <style media="screen">
            input, textarea{
                width: 100%;
            }
        </style>
    </head>
    <body>
        <form class="mailer">
            <input type="email" name="email" placeholder="Destinataire" value="<?php echo $mail['email']; ?>">
            <input type="text" name="subject" placeholder="Sujet" value="<?php echo $mail['subject']; ?>">
            <textarea name="message" rows="8" placeholder="Message"><?php echo $mail['message']; ?></textarea>
            <input type="submit" value="Envoyer">
        </form>

        <script src="app.js"></script>
    </body>
</html>
