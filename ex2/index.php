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
            <input type="email" name="email" placeholder="Destinataire">
            <input type="text" name="subject" placeholder="Sujet">
            <textarea name="message" rows="8" placeholder="Message"></textarea>
            <input type="hidden" name="draft_identifier">
            <input type="submit" value="Envoyer">
        </form>

        <script src="app.js"></script>
    </body>
</html>
