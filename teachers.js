import { storage } from './firebase-config.js';
import { ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

window.addEventListener('load', () => {
    const fileList = document.getElementById('file-list');
    const storageRef = ref(storage, 'uploads/');

    listAll(storageRef).then((result) => {
        result.items.forEach((fileRef) => {
            getDownloadURL(fileRef).then((url) => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = url;
                link.innerText = fileRef.name;
                link.target = '_blank';
                li.appendChild(link);
                fileList.appendChild(li);
            });
        });
    }).catch((error) => {
        console.error('Error fetching files:', error);
    });
});
