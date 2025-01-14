class Node {
    constructor(element) {
      this.element = element; 
      this.next = null; 
    }
}

class CircularLinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(element){
        const node = new Node(element);

        if(this.head === null){
            this.head = node;
            node.next = this.head;
        }
        else{
            let current = this.head;

            while (current.next !== this.head) {
                current = current.next;
            }

            current.next = node;
            node.next = this.head;
        }

        this.length++;
    }

    getElementAt(index){
        if(index < 0 || index >= this.length){
            return null;
        }

        let i = 0;
        let current = this.head;
        
        while(i < index){
            current = current.next;
            i++;
        }

        return current;
    }

    
}

const list = new CircularLinkedList();


const allElements = document.body.querySelectorAll('*');
let divContent = document.createElement("div");
divContent.id = "newContainer"
allElements.forEach((element, index) => {
    if(index != allElements.length - 1){
        list.append(element)
        divContent.appendChild(element)
    }
})


// console.log(list.getElementAt(0).element)
document.body.appendChild(divContent)


// if (document.scrollingElement.scrollHeight )
// console.log(document.scrollingElement.scrollTop + document.scrollingElement.clientHeight)
// console.log(document.scrollingElement.scrollHeight)

let lastNode = list.getElementAt(list.length - 1);
let nextNode = lastNode ? lastNode.next : null;




window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.scrollingElement.scrollHeight){
    
        let parentElement = document.querySelector("#newContainer");
    
        parentElement.appendChild(nextNode.element);
        nextNode = nextNode.next;
        
    }

    // console.log(document.scrollingElement.scrollWidth)
    // console.log(window.scrollX)
    // if( == document.scrollingElement.scrollWidth){
    //     console.log("Aok!")
    // }
    // if(document.scrollingElement.scrollWidth >= window.innerWidth){
    //     let parentElement = document.body;
    //     document.body.innerWidth = "200vw";
    //     let newDivContent = document.createElement("div")
    //     allElements.forEach((element, index) => {
    //         if(index < allElements.length - 1){
    //             newDivContent.appendChild(element)
    //         }
    //     })
    //     parentElement.appendChild(newDivContent)
    //     console.log("Aok!")
    // }
})

// scrollableElement.addEventListener("scroll", () => {
//     let scrollToLeft = scrollableElement.scrollLeft
//     let scrollWidth = scrollableElement.scrollWidth
//     let clientWidth = scrollableElement.clientWidth
    
//     if(scrollToLeft + clientWidth >= scrollWidth){

//         scrollableElement.appendChild(divContent)
//     }
// })

