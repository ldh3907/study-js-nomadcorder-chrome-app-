const calculator = {
    plus: function(n1, n2){
        return n1+n2;
    },

    minus : function(n1, n2){
        return n1-n2;
    }
}

// function printf(print){
//     console.log(print);
// }

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);


