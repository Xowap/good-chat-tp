Stories
=======

Pour simplifier, le nom des stories est rédigé de la façon suivante :
`L'utilisateur peut X`, X étant le titre de la story.

Chaque story comporte 3 sections :

- Une liste des fonctions à coder pour réaliser cette story. Vous avez la
  liberté du nommage des fonctions, mais vous devez respecter le découpage
  indiqué.
- Des liens vers la documentation des fonctions utiles
- Éventuellement, des morceaux de code desquels vous pouvez vous inspirer

1. Avoir un nom automatique
---------------------------

Au premier lancement de l'application pour la session, un nom est
automatiquement généré. Ce nom est enregistré pour la durée de la session.

Fonctions à coder
~~~~~~~~~~~~~~~~~

- Une fonction qui retourne l'``input`` du nom de l'utilisateur
- Une fonction d'initialisation qui rempli le champ avec le nom fourni par
  ``randName``.

Documentation
~~~~~~~~~~~~~

- `Document.querySelector() <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>`_
- :js:func:`randName.getNameForSession()`

Exemples
~~~~~~~~

Définir la valeur d'un input
++++++++++++++++++++++++++++

.. code-block:: javascript
   :emphasize-lines: 3,5

     document.querySelector('#my-input').value = 'foo';

2. Changer son nom
------------------

En changeant le champ texte en haut à droite, l'utilisateur change son nom pour
la durée de la session.

Fonctions à coder
~~~~~~~~~~~~~~~~~

- Une fonction qui surveille le champ du nom de l'utilisateur, et l'enregistre
  quand il est changé

Documentation
~~~~~~~~~~~~~

- `EventTarget.addEventListener() <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>`_
- `keyup <https://developer.mozilla.org/en-US/docs/Web/Events/keyup>`_
- `HTMLInputElement <https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement>`_ (s'intéresser à ``value``)
- :js:func:`randName.setName()`

Exemples
~~~~~~~~

Surveiller les valeurs d'un input
+++++++++++++++++++++++++++++++++

.. code-block:: javascript

   var input = document.querySelector('#my-input');
   input.addEventListener('keyup', function () {
       console.log('new value', input.value);
   });

Sauvegarder un nom dans randName
++++++++++++++++++++++++++++++++

.. code-block:: javascript

   randName.setName('Alice');

3. Voir les messages reçus
--------------------------

À la réception d'un message, il est ajouté à la liste des messages reçus.

Fonctions à coder
~~~~~~~~~~~~~~~~~

- Une fonction qui, à partir d'un timestamp Unix en millisecondes, retourne
  l'heure au format "hh:mm". Les messages reçus ont comme attribut ``time``
  un timestamp Unix, et l'affichage nécessite de montrer l'heure au format
  "hh:mm", cette fonction est donc un outil pour aider à passer de l'un à
  l'autre.
- Une fonction qui, à partir d'un message reçu, génère le code HTML (ou plutôt
  le DOM) à insérer dans la liste des messages. Pour information, le template
  des messages est disponible dans la balise ``script#tpl-message-row`` qui
  se trouve à la fin de ``index.html``.
- Une fonction qui reçoit en argument un message, le transformes en HTML,
  l'ajoute à la liste des messages et enfin s'assure que le nombre de messages
  affichés ne dépasse pas un nombre prédéterminé (10 par exemple).
- Et enfin, une fonction qui utilise l'API ``goodChat`` pour recevoir les
  messages.

Documentation
~~~~~~~~~~~~~

- `Date.getHours() <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours>`_
  Retourne les heures d'un objet ``Date``.
- `Date.getMinutes() <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes>`_
  Retourne les minutes d'un objet ``Date``.
- `Element.innerHTML <https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML>`_
  Permet de changer le code HTML à l'intérieur d'un nœud du DOM.
- `Node.textContent <https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent>`_
  Permet de changer le texte à l'intérieur d'un nœud du DOM. À privilégier pour
  afficher du contenu provenant d'un utilisateur, par exemple un message.
- `Node.insertBefore() <https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore>`_
  Insère un nœud enfant juste avant le nœud indiqué en paramètre. Utile pour
  insérer un élément en début de liste, par exemple.
- `Node.removeChild() <https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild>`_
  Supprime l'enfant spécifié de la liste des descendants.
- `ParentNode.childElementCount <https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount>`_
  Compte le nombre d'enfants d'un nœud du DOM.
- :js:func:`goodChat.onMessage()`
  Permet d'enregistrer un callback qui sera appellé à la réception d'un nouveau
  message.

Exemples
~~~~~~~~

Ajouter un zéro devant un entier
++++++++++++++++++++++++++++++++

.. code-block:: javascript

   if (x < 10) {
       return '0' + x;
   }

   return x.toString()

Obtenir les heures d'un timestamp
+++++++++++++++++++++++++++++++++

.. code-block:: javascript

   var date = new Date(timestamp);
   console.log(date.getHours());

Transformer un template en nœud du DOM
++++++++++++++++++++++++++++++++++++++

.. code-block:: html

   <script type="application/template" id="my-template">
       <h1 class="my-title"></h1>
   </script>

.. code-block:: javascript

   var newItem = document.createElement('div');
   newItem = document.querySelector('#my-template').innerHTML;
   newItem.querySelector('.my-title').textContent = 'Foo Title';

Insérer un élément du DOM en premier sous un parent
+++++++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: html

   <ul id="my-list">
       <li>Un item</li>
       <li>Et un autre</li>
   </ul>

.. code-block:: javascript
   :emphasize-lines: 5

   var newItem = document.createElement('li'),
       list = document.querySelector('#my-list');
   newItem.textContent = 'Foo Item';

   list.insertBefore(newItem, list.firstChild);

Limiter le nombre d'enfants à un nombre donné
+++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: javascript

   var node = document.createElement('#my-node');

   while (node.childElementCount > 10) {
       node.removeChild(node.lastElementChild);
   }

Recevoir les message
++++++++++++++++++++

.. code-block:: javascript

   goodChat.onMessage(function (message) {
       console.log('nom d\'utilisateur', message.userName);
       console.log('message', message.message);
       console.log('date', new Date(message.time));
   });

4. Envoyer un message
---------------------

Si l'utilisateur tape un message puis qu'il tape la touche `Entrée` ou qu'il
clique sur le bouton `Envoyer`, alors le message saisi est envoyé à tout le
monde, puis affiché.

Fonctions à coder
~~~~~~~~~~~~~~~~~

- Une fonction qui réagit à la soumission du formulaire pour envoyer le message
  via l'API ``goodChat``.

Documentation
~~~~~~~~~~~~~

- `Event.preventDefault() <https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault>`_
- `submit <https://developer.mozilla.org/en-US/docs/Web/Events/submit>`_
- :js:func:`goodChat.sendMessage()`

Exemples
~~~~~~~~

Intercepter la soumission d'un formulaire
+++++++++++++++++++++++++++++++++++++++++

.. code-block:: javascript

   var form = document.querySelector('#my-form');

   form.addEventListener('submit', function (event) {
       event.preventDefault();
       console.log('This form is no longer being submitted');
   });

5. Ne pas envoyer de message quand le message ou le nom est vide
----------------------------------------------------------------

Si l'utilisateur n'a pas saisi de message ou de nom, alors il faut désactiver
l'envoi du formulaire et ajouter la classe ``disabled`` au bouton d'envoi pour
qu'il comprenne qu'il ne peut pas cliquer dessus.

Fonctions à coder
~~~~~~~~~~~~~~~~~

- Une fonction qui surveille les modifications du message.
- Une fonction qui vérifie qu'il y a bien du contenu dans les champs de message
  et de nom d'utilisateur. Si non, alors elle ajoute une classe ``disabled`` au
  bouton du formulaire, et désactive l'envoi (pour cela, modifier la fonction
  d'envoi de message). Appeller cette fonction à chaque modification du nom
  d'utilisateur et du message.

Documentation
~~~~~~~~~~~~~

- `Element.classList <https://developer.mozilla.org/en-US/docs/Web/API/Element/classList>`_
