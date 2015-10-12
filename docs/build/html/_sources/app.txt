L'application Good Chat
=======================

Good Chat est une application très simple de chat en ligne. Elle permet à ses
utilisateurs de communiquer entre eux instantannément via des messages texte.

.. figure:: img/cat.gif

   On ne parle pas de ce chat là

Maquette
--------

Une maquette de l'application est disponible en ligne.

    http://ky9up3.axshare.com

Technologie
-----------

Pour servir l'exercice, l'application est conçue de la façon la plus simple
possible.

    - On considère qu'on utilisera forcément un navigateur digne de ce nom
      (c'est à dire pas Internet Explorer)
    - Le code HTML est écrit directement
    - Javascript
        - On utilise ES5
        - Pas de framework (pas de jQuery)
    - Style
        - Basé sur Bootstrap
        - Écrit en LESS et compilé grâce à WebStorm
    - On utilise `Firebase <https://www.firebase.com/>`_ pour faire communiquer
      les clients
    - Les dépendances sont gérées par Bower

Architecture
------------

Le TP est livré des fichiers qui n'ont pas besoin d'être modifiés

    - ``index.html`` contient le code HTML de la page ainsi qu'une balise
      ``<script type="application/template" id="tpl-message-row">`` qui contient
      le template HTML d'un message.
    - ``style.less`` (et la version compilée ``style.css``) contient quelques
      ajouts à Bootstrap.
    - ``goodchat.js`` est une abstraction au dessus de `Firebase` qui permet
      d'envoyer/recevoir des messages.
    - ``randname.js`` est une petite bibliothèque JS qui génère des noms
      aléatoires, pour le pseudo.

De ce fait, l'ensemble du code que vous devrez écrire sera rangé dans le fichier
``app.js`` qui est prévu à cet effet.

Bibliothèques
-------------

Deux bibliothèques simples codées pour l'occasion doivent être utilisées
directement pour réaliser ce projet.

goodchat.js
~~~~~~~~~~~

``goodchat.js`` est en charge de gérer la communication avec le backend
(`Firebase`). Il permet simplement d'envoyer et de recevoir des messages en
temps réel.

.. js:function:: goodChat.onMessage(callback)

   :param callback:
        Le callback est appelé à chaque fois qu'un nouveau message est reçu. Au
        chargement de la page, tous les messages déjà échangés par le passé sont
        reçus d'un coup.

        Le message reçu est simplement un objet contenant 3 clefs :
        ``userName``, ``message`` et ``time`` (qui est le timestamp en
        millisecondes du message).

.. js:function:: goodChat.sendMessage(userName, message)

    :param userName: Le nom de l'utilisateur
    :param message: Chaîne du message

    Cette fonction envoie un message à tous les autres participants du
    Good Chat.


randname.js
~~~~~~~~~~~

``randname.js`` est simplement une petite librairie pour générer un nom
aléatoire à l'utilisateur, et le stocker dans la session du navigateur.

.. js:function:: randName.genName()

   Génère un nom aléatoire et le retourne.

.. js:function:: randName.setName(name)

   :param name: Nom de l'utilisateur à stocker

   Stocke ce nom d'utilisateur en session.

.. js:function:: randName.getNameForSession()

   Retourne le nom de l'utilisateur stocké en session. Si le nom n'a pas encore
   été défini, alors génère automatiquement un nom à l'aide de
   ``randName.genName()``.
