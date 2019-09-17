document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#podcast-list ul');
    const forms = document.forms;

    //delete podcasts
    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add podcasts
    const addForm = forms['add-podcast'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();

        // create elements
        const value = addForm.querySelector('input[type="text"]').value; 
        const li = document.createElement('li');
        const podcastName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add text content
        podcastName.textContent = value;
        deleteBtn.textContent = 'delete';

        // add classes
        podcastName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to DOM
        li.appendChild(podcastName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    // hide podcasts
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
        list.style.display = "none";
     } else {
         list.style.display = "initial";
     }
    });

    // filter podcasts
    const searchBar = forms['search-podcasts'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const podcasts = list.getElementsByTagName('li');
        Array.from(podcasts).forEach((podcast) => {
            const title = podcast.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(e.target.value) != -1) {
                podcast.style.display = 'block';
            } else {
                podcast.style.display = 'none';
            }
        });
    });

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
        if(e.target.tagName == 'LI'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach((panel) => {
                if(panel == targetPanel){
                    panel.classList.add('active');
                } else{
                    panel.classList.remove('active');
                }
            });
    }
});
});
