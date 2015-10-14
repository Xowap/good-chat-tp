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
