dataset 폴더 : datasets 하위 폴더로 생성
dataset 폴더 구조 : Dataset - train - images
                    Dataset - train - labels

sample.yaml 작성 내용
1. path : dataset 폴더 위치(train 폴더 상위폴더 주소까지)
2. train, val : train-images 폴더까지
3. nc : 학습시킬 모델 수
4. names : 학습시킬 모델 이름 배열