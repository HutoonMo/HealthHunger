import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem import PorterStemmer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier

def load_data():
    recipe = pd.read_csv(r'Final_recipe.csv',header=0,encoding = 'unicode_escape').dropna()
    return recipe


def Data_Cleaning(recipe):
    # remove punctuation + numbers + non alphabetic characters
    recipe['ingredients'] = recipe['ingredients'].str.replace("[^a-zA-Z]", ' ')
    return recipe



def features_Extraction(recipe):
    #2.data cleaning
    temp = []
    for s in recipe['ingredients']:
        # Remove Stop Words
        stop_words = set(stopwords.words('english'))
        word_tokens = word_tokenize(s)
        filtered_sentence = [w for w in word_tokens if w not in stop_words]
        filtered_sentence = []
        for w in word_tokens:
            if w not in stop_words:
                filtered_sentence.append(w)
        s = ' '.join(filtered_sentence)
        # Porter Stemmer Algorithm to Remove low-content adjectives
        ps = PorterStemmer()
        words = word_tokenize(s)
        word_ps = []
        for w in words:
            word_ps.append(ps.stem(w))
        s = ' '.join(word_ps)    
        temp.append(s)
    recipe['ingredients'] = temp
    doc=recipe['ingredients'].tolist()
    count_vector = CountVectorizer()
    count_vector.fit(doc) # Fit the documents and then return the matrix
    features_names=count_vector.get_feature_names() # here the only words that we have
    doc_array =fit_vic.transform(doc) # here we transform the text to the Bag of Words
    doc_array=doc_array.toarray()
    return doc_array

def split_data(features_vector,recipe):
    Labels = np.array(recipe['gluten-free'])
    # split Dataset
    X_train, X_test, y_train, y_test = train_test_split(features_vector, Labels, test_size=0.2, random_state=42)


def train_model(X_train, y_train):
    clf = RandomForestClassifier(n_estimators=30)
    clf.fit(X_train, y_train)
    score=clf.score(X_train, y_train) * 100
    return clf,score

def test(X_test,y_test):
    y=clf.predict(X_test)
    return y
def main():
    recipe=load_data()
    claen_recipe=Data_Cleaning(recipe):
    features_vector=features_Extraction(claen_recipe)
    X_train, X_test, y_train, y_test=split_data(features_vector,recipe)
    model,score=train_model(X_train, y_train)
    y=test(X_test,y_test)
    print(y)






