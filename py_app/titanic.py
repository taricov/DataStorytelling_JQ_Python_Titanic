import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

import statsmodels.api as sm
from scipy import stats
import pylab 

import warnings 
warnings.filterwarnings('ignore', category=FutureWarning)



train = pd.read_csv('train.csv')

data = train[['Survived', 'Pclass', 'Fare']]

def buy_a_ticket():
    import time
    from sklearn.linear_model import LinearRegression
    from sklearn.model_selection import train_test_split
    ##########################################
    y = data['Survived']
    X = data[['Pclass', 'Fare']]
    
    lr = LinearRegression()
    lr.fit(X,y)
    ###########################################

    today_salary = input('Enter your salary')
    salary_1912 = int(today_salary)/28.20
    
    distance_dict = {'1': 1, '2': .2, '3': .3}
    distance = input('Distance: Would like to pick up which point (1, 2 or 3 where 3 is nearer to destination)?')
    
    if int(distance) > 3:
        print('Distince is out of range')
        return False
    
#     distance = distance[distance]
    onboarding_cost = 2
    living = .3
    base_salary = salary_1912*(1-living)
    
    if distance == '1':
        base_salary = (base_salary-(base_salary*distance_dict['3']))
    elif distance == '2':
        base_salary = (base_salary-(base_salary*distance_dict['2']))
    else:
        base_salary = base_salary
        
    if base_salary < 10:
        print('kidding me?! Ha .. wanna travel from Portsmouth to NewYork with %s, OFF YOU GO!!' %base_salary)
        return False
    max_class_1 = 300
    max_class_2 = 80
    max_class_3 = 69
    rec = []
    
    if base_salary < max_class_3:
        rec.extend('3')
    elif base_salary < (max_class_2+(max_class_2*.5)):
        rec.extend(['3','2'])
    else:
        rec.extend(['3', '2', '1'])
        
    class_recommended = input('Class recommeded: you can choose: {} =>'.format(' or '.join(rec)))
    class_recommended = int(class_recommended)
    if str(class_recommended) not in rec:
        print('Unavailable class: your amount isn\'t sufficient')
        return False

    print('Welcome On Board!')
    time.sleep(1)
    print('Loading ...')
    time.sleep(2)
    print('Titanic will leave the shores Tomorrow at 06:00 AM')
    time.sleep(1)
    print('Loading ...')
    time.sleep(2)
    print('Waiting for ur survival rate? Math is going on .. Your life Matters')
    time.sleep(1)
    print('Loading ...')

    ###########################################
    
    prediction = lr.predict([[class_recommended, base_salary]])
    prediction = round(prediction[0]*100, 2)
    time.sleep(2)        
    print('%', prediction)
    time.sleep(1)
    if prediction >80:
        print('You have a chance!')
    elif prediction > 50:
        print('I am not sure u gonna make it!')
    elif prediction > 30:
        print('If I were u, I would not gamble!')
    else:
        print('You\'re gonna die tomorrow!')



if __name__ == '__main__':
    buy_a_ticket()
