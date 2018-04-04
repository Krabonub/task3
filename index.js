(function(){
    var addCollectionCollectionNameInput = document.getElementById('add-collection-collectionName-input');
    var addPropertyCollectionNameInput = document.getElementById('add-property-collectionName-input');
    var addPropertyPropertyNameInput = document.getElementById('add-property-propertyName-input');
    var removeFirstPropertyCollectionNameInput = document.getElementById('remove-firstProperty-collectionName-input');
    var removeLastPropertyCollectionNameInput = document.getElementById('remove-lastProperty-collectionName-input');
    var clearAllCollectionNameInput = document.getElementById('clearAll-collectionName-input');
    var addCollectionButton = document.getElementById('add-collection-button');
    var addPropertyButton = document.getElementById('add-property-button');
    var addPropertyButton = document.getElementById('remove-firstProperty-button');
    var addPropertyButton = document.getElementById('remove-lastProperty-button');
    var addPropertyButton = document.getElementById('clearAll-button');
    var resultParagraph = document.getElementById('result-paragraph');
    
    var collections = {};
    function createCollection(name){
        var obj = {
            name : name,
            properties : [],
            addValue : function(prop){
                this.properties.push(prop);
                return this;
            },
            removeFirst : function(){
                this.properties.shift();
                return this;
            },
            removeLast : function(){
                this.properties.pop();
                return this;
            },
            clearAll : function(){
                this.properties = [];
                return this;
            }
        };
        collections[name] = obj;
        console.log(collections);
        return obj;
    }
    var collection1 = createCollection("COLLECTION1");
    var collection2 = createCollection("COLLECTION2");
    collection1.addValue({name:"John",value:204}).addValue({name:"Ban",value:187}).removeLast().clearAll();
    collection2.addValue({name:'Syndy',value:108});
    collection2.clearAll();
    /////////////////////
    addCollectionButton.onclick = function(){
        var tmpCollection = createCollection(addCollectionCollectionNameInput.value);
        var tmpElement = document.createElement('p');
        tmpElement.innerHTML=`<p>
        <strong>${tmpCollection.name}</strong>
        </p>`;
        resultParagraph.appendChild(tmpElement);
        addCollectionCollectionNameInput.value = '';
    }
    addPropertyButton.onclick = function(){

    }
})()