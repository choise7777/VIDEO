// 이미지와 비디오 파일을 동적으로 불러오는 예시
// 실제 파일 목록은 서버 또는 파일 시스템에서 가져와야 함

const imageFolder = 'ASSETS/IMAGES/';
const videoFolder = 'ASSETS/VIDEO/';

// 예시 이미지/비디오 파일명 배열 (직접 파일명 추가)
const images = [
    // 'sample1.jpg', 'sample2.png'
];
const videos = [
    'VIDEO1.mp4'
];

function loadGallery() {
    const imageContainer = document.getElementById('images');
    images.forEach(img => {
        const el = document.createElement('img');
        el.src = imageFolder + img;
        el.alt = img;
        imageContainer.appendChild(el);
    });

    const videoContainer = document.getElementById('videos');
    videos.forEach(vid => {
        const el = document.createElement('video');
        el.src = videoFolder + vid;
        el.controls = true;
        videoContainer.appendChild(el);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery);