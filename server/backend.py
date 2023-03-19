from cmath import log
from flask import Flask,render_template, request_started
from flask_cors import CORS, cross_origin
import numpy as np

import cv2
from flask import jsonify
from flask import request
import os
import numpy as np
import cv2
import tensorflow as tf

app = Flask(__name__)

CORS(app, support_credentials=True)
@app.route('/', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def login(*args):
      if request.method == 'POST':
        content=request.get_json(force=True)
        lucky = tf.keras.models.load_model("Lucky.AI")
        print('hi')
        img_array = cv2.imread(content['file']) 
        img_array = cv2.resize(img_array , (50,50))
        img_array = cv2.cvtColor(img_array , cv2.COLOR_BGR2GRAY)
        img_resize = np.array([img_array])
        prediction = lucky.predict([img_resize])
        result = np.argmax(prediction)
        
        if result==0:
            return "Glioma"+str(result)
        elif result==1:
            return "Meningioma"+str(result)
        elif result==2:
            return "Pituitary Tumor"+str(result)
        elif result==3:
            return "Healthy"+str(result)
        

         
      return 'hi'