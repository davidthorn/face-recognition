"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fr = __importStar(require("face-recognition"));
exports.application = function () {
    var detector = fr.AsyncFaceDetector();
    var ele = document.getElementById('image1');
    ele.setAttribute('src', '../data/image1.jpg');
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
};
exports.application();
