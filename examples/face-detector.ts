import * as fr from 'face-recognition'

export const application = () => {
    const detector = fr.AsyncFaceDetector()

    const ele = document.getElementById('image1') as HTMLImageElement
    ele.setAttribute('src' , '../data/image1.jpg')

    // const image = fr.loadImage('./data/image1.jpg')
    // console.log(image)
    // detector.locateFaces(image).then(rects => {
        
    //     const win = new fr.ImageWindow()
        
    //     win.setImage(image)
    
        

    //     rects.forEach(rect => {
    //         win.addOverlay(rect.rect)
    //     })
        
    //     fr.hitEnterToContinue()
    
    // }).catch((error) => {
    //     console.log('was not possible to detect faces')
    // })
}

application()

