const fileinput = document.getElementById("fileinput");
const gallery = document.getElementById("Gallery")

// Add event listener with file input

fileinput.addEventListener('change', function(){
    const files = this.files;

    for(const file of files){
        if(file.type.startsWith("image/")){
            // Create an image element and display the uploaded image
            const image = document.createElement("img");
            image.src = URL.createObjectURL(file);

            // Create a container for the image and add it to the gallery
            const imagecontainer = document.createElement('div');
            imagecontainer.classList.add("image-container");
            imagecontainer.appendChild(image);
            gallery.appendChild(imagecontainer);

        }
    }
})