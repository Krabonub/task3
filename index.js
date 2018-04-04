(function(){
    var addCollectionCollectionNameInput = document.getElementById('add-collection-collectionName-input');
    var addPropertyCollectionNameInput = document.getElementById('add-property-collectionName-input');
    var addPropertyPropertyObjectInput = document.getElementById('add-property-propertyName-input');
    var removeFirstPropertyCollectionNameInput = document.getElementById('remove-firstProperty-collectionName-input');
    var removeLastPropertyCollectionNameInput = document.getElementById('remove-lastProperty-collectionName-input');
    var clearAllCollectionNameInput = document.getElementById('clearAll-collectionName-input');
    var addCollectionButton = document.getElementById('add-collection-button');
    var addPropertyButton = document.getElementById('add-property-button');
    var removeFirstPropertyButton = document.getElementById('remove-firstProperty-button');
    var removeLastPropertyButton = document.getElementById('remove-lastProperty-button');
    var clearAllButton = document.getElementById('clearAll-button');
    var resultParagraph = document.getElementById('result-paragraph');
    
    var collections = {};
    function printCollections(){
        resultParagraph.innerHTML = '';
        for(var i in collections){
            var tmpP = document.createElement('p');
            tmpP.innerHTML=`<strong>${i}</strong>`;
            for(var j in collections[i].properties){
                var tmpDiv = document.createElement('div');
                tmpDiv.innerHTML = `<span>${collections[i].properties[j].name}</span>: <span>${collections[i].properties[j].value}</span><br>`;
                tmpP.appendChild(tmpDiv);
            }
            resultParagraph.appendChild(tmpP);
        }
    }
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
        return obj;
    }
    var collection1 = createCollection("COLLECTION1");
    var collection2 = createCollection("COLLECTION2");
    collection1.addValue({name:"John",value:204}).addValue({name:"Ban",value:187}).removeLast().clearAll();
    collection2.addValue({name:'Syndy',value:108});
    collection2.clearAll();
    /////////////////////
    addCollectionButton.onclick = function(){
        createCollection(addCollectionCollectionNameInput.value);
        printCollections();
        addCollectionCollectionNameInput.value = '';
    }
    addPropertyButton.onclick = function(){
        var match = addPropertyPropertyObjectInput.value.match(/\w+/g);
        //console.log(match);
        console.log(addPropertyCollectionNameInput.value);
        collections[addPropertyCollectionNameInput.value].addValue({
            [match[0]] : match[1],
            [match[2]] : match[3]
        });
        printCollections();
        addPropertyCollectionNameInput.value = '';
    }
    removeFirstPropertyButton.onclick = function(){
        collections[removeFirstPropertyCollectionNameInput.value].removeFirst();
        printCollections();
        removeFirstPropertyCollectionNameInput.value = '';
    }
    removeLastPropertyButton.onclick = function(){
        collections[removeLastPropertyCollectionNameInput.value].removeLast();
        printCollections();
        removeLastPropertyCollectionNameInput.value = '';
    }
    clearAllButton.onclick = function(){
        collections[clearAllCollectionNameInput.value].clearAll();
        printCollections();
        clearAllCollectionNameInput.value = '';
    }
    //////////////////////
    printCollections();
})()
//{name:"Ban",value:2}