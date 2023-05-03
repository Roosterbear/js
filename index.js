function setup() {
    // Write your code here.

    const post = document.getElementById('postComment')
    const text = document.getElementById('comment')

    post.addEventListener("click",agregar(e))
  }

  function agregar(){
    document.createElement("li","");
  }
  
  // Example case. 
  document.body.innerHTML = `
  <ul id='commentList'>
  </ul>
  <form>
    <input type='text' id='comment'/>
    <input type='button' id='postComment' value='Post'/>
  </form>`;
  
  setup();
  
  document.getElementById("comment").value = "test"; 
  document.getElementById("postComment").click();
  console.log(document.body.innerHTML);