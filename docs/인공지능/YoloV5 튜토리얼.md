## Yolo V5 사물인식 튜토리얼

- yolov5 Github url : https://github.com/ultralytics/yolov5

- 조건
- PyTorch Ver : 1.7 이상
- Python Ver : 3.7.0 이상

- 설치
git clone https://github.com/ultralytics/yolov5  # clone
cd yolov5
pip install -r requirements.txt  # install

- 샘플 코드
import torch

def yoloV5():
    print('yolo V5 Start')
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
    # 이미지
    img = 'https://ultralytics.com/images/zidane.jpg'
    # 추론
    results = model(img)

    #results.pandas().xyxy[0]  # 예측 (pandas)
    results.save()
    results.show()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    yoloV5()

- 결과값

