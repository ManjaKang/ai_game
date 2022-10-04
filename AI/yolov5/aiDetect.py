# -*- coding: utf-8 -*-

import torch
import json
import sys

items = [
    'scissors',
    'paint brush',
    'cup',
    'tv',
    'monitor',
    'laptop',
    'cell phone',
    'phone charger',
    'guitar',
    'face mask',
    'table lamp',
    'door',
    'pen',
    'pillow',
    'bottle',
    'hand',
    'shirts',
    'pants',
    'book',
    'key',
    'blanket',
    'desk',
    'bookshelf',
    'glove',
    'hanger',
    'microwave',
    'refrigerator',
    'hair dryer',
    'toothpaste',
    'shower head',
    'notebook',
    'pet bottle',
    'pot',
    'bed',
    'chair',
    'drawers',
    'fan',
    'backpack',
    'umbrella',
    'clock'
]


def aiDetect(path_img, name_img):  # add param name (img path(with name), product name)
    print('yolo V5 Start')
    print('working...')

    paths = "/home/ubuntu/ai/yolov5/custom/best.pt"
    # paths = os.getcwd() + "./train/weights/best2.pt"
    # paths = "D:/WorkSpace/PyCharm/forStudyAI/train/weights/best2.pt"

    model = torch.hub.load('ultralytics/yolov5', 'custom', path=paths)

    # model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

    # 이미지
    img = path_img
    # img = './img/underwater.jpg'
    # 추론
    results = model(img)
    json_data = json.loads(results.pandas().xyxy[0].to_json(orient="records"))

    result_list = {}
    print('camera,0.7951256/pen,0.157654/table,0.985215')
    items = ['jellyfish', 'fish', 'shark', 'stingray']

    for data in json_data:
        if data["name"] == items:
            if data["confidence"] > 0.76:
                if data['name'] in result_list.keys():
                    if data['confidence'] > result_list[data['name']]:
                        result_list[data['name']] = data['confidence']
                else:
                    result_list[data['name']] = data['confidence']

    json_return_data = ''
    for data in result_list.keys():
        json_return_data += data + ',' + str(result_list.get(data)) + '/'

    print(json_return_data)
    # print('result : camera,0.7951256/bed,0.157654/table,0.985215')
    #return json_return_data


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    aiDetect(sys.argv[1], sys.argv[2])  # add param( like this : sys.argv[1], sys.argv[2])
