function change(part, imageName) {
    // id가 layer_hat, layer_top 등인 요소를 찾아서 이미지를 바꿉니다.
    const targetLayer = document.getElementById('layer_' + part);
    if (targetLayer) {
        targetLayer.src = imageName;
    }
}