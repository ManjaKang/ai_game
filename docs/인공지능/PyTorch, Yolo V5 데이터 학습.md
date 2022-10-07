## 준비사항

1. 폴더 생성

   원하는 위치에 폴더 생성

2. 아래 명령어로 소스 다운

   git clone https://github.com/ultralytics/yolov5.git

3. 원하는 데이터 구하기

   예시 링크) https://www.kaggle.com/datasets 에서 yolo v5 검색 후 dataset 설정

## 학습 전 설정

### 데이터 설정

1. yolo 폴더에 datasets 폴더 생성

2. datasets 하위 폴더로 구분하기 쉬운 폴더와 그 하위로 images, labels 폴더 생성

   ![SampleData - train 폴더 생성 후 필수 폴더 생성](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7f49df9-8ff7-46f5-aacd-4ff2be85fc6d/Untitled.png)

   SampleData - train 폴더 생성 후 필수 폴더 생성

3. 다운로드 받은 데이터를 각 폴더에 맞게 이동

   1. 이미지 - images
   2. 이미지 설명 txt 파일 - labels

### 학습 데이터 관련 설정

1. yolo 폴더 안에 data 로 이동

2. sample.yaml 생성

3. 아래 내용 추가 및 다운로드 받은 데이터 에 있는 yaml 데이터 추가

   ```yaml
   path: ../datasets/sampleData# dataset root dir
   train: train/images# train images (relative to 'path') 128 images
   val: train/images# val images (relative to 'path') 128 images
   test:  # test images (optional)
   
   nc: 7
   names: ['fish', 'jellyfish', 'penguin', 'puffin', 'shark', 'starfish', 'stingray']
   ```

   - path : 데이터가 존재하는 폴더의 루트 주소 입니다.
   - train : 이미지 데이터가 존재하는 폴더 주소 입니다.
   - nc : 구별할 사물의 갯수 입니다.
   - names : 구별할 사물의 이름들 리스트입니다.
     - nc, names는 보통 받은 데이터 안에 data.yaml 로 있습니다.

4. yolo 폴더에 [tarin.py](http://tarin.py) 파일을 아래와 같이 수정

   1. 기존 데이터 경로 및 정보 파일(yaml)을 변경

      ```python
      parser.add_argument('--data', type=str, default=ROOT / 'data/coco128.yaml', help='dataset.yaml path')
      ```

      ```python
      parser.add_argument('--data', type=str, default=ROOT / 'data/sample.yaml', help='dataset.yaml path')
      ```

   2. worker 수를 8명에서 0명으로 변경(에러날 가능성이 높다고 함)

      ```python
      parser.add_argument('--workers', type=int, default=8, help='max dataloader workers (per RANK in DDP mode)')
      ```

      ```python
      parser.add_argument('--workers', type=int, default=0, help='max dataloader workers (per RANK in DDP mode)')
      ```

### 필요한 라이브러리 및 드라이버

1. 그래픽 드라이버(Nvidia 제품 한정)

   > 본인 컴퓨터 적용 대상인지는 아래 링크에서 확인

   [CUDA GPUs - Compute Capability](https://developer.nvidia.com/cuda-gpus)

   1. 추후 예정
   2. 추후 예정

2. 필요 라이브러리

   1. PyTorch - GPU 사용 설정

      - 아래 링크에서 확인

        [PyTorch](https://pytorch.org/get-started/locally/)

      - 링크 접속 후 스크롤 후 아래 사진 파트에서 선택 후 설치

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e2292c6-2011-4abe-ae82-e99aa1f98574/Untitled.png)

        - PyTorch Build : PyTorch 버전
        - Your OS : 사용중인 운영체제
        - Package : 사용중인 python 라이브러리 관리 체계
        - Compute Platform : 1번(그래픽 드라이버 파트)에서 선택한 버전

   2. Yolo V5 라이브러리 버전 요구사항

      ```
      # Base ----------------------------------------
      matplotlib>=3.2.2
      numpy>=1.18.5
      opencv-python>=4.1.1
      Pillow>=7.1.2
      PyYAML>=5.3.1
      requests>=2.23.0
      scipy>=1.4.1
      torch>=1.7.0
      torchvision>=0.8.1
      tqdm>=4.64.0
      # protobuf<=3.20.1  # <https://github.com/ultralytics/yolov5/issues/8012>
      
      # Logging -------------------------------------
      tensorboard>=2.4.1
      # wandb
      # clearml
      
      # Plotting ------------------------------------
      pandas>=1.1.4
      seaborn>=0.11.0
      
      # Extras --------------------------------------
      ipython  # interactive notebook
      psutil  # system utilization
      thop>=0.1.1  # FLOPs computation
      ```

# 실행

1. yolo 폴더로 이동([trade.py](http://trade.py) 있는 폴더)

2. 아래 명령어로 실행

   ```jsx
   python trade.py
   ```