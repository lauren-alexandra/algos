'''
can add other metrics like impurity for both categorical and continuous
'''

__all__ = ['f_values', 'pearson_corr', 'snr', 'chi_square']

from sklearn.feature_selection import f_classif
from scipy.stats import chi2_contingency
import numpy as np
import pandas as pd

def f_values(data, features, target):
    X = data[features].values
    y = data[target].values

    f_values, p_values = f_classif(X, y)
    result = {feature:[f_value, p_value] for feature, f_value, p_value in zip(features, f_values, p_values)}
    return result
    
def pearson_corr(data, features, target):
    corr = data[features+[target]].corr()[target].to_dict()
    return corr


def snr(data, features, target):
    output = {}
    for feature in features:
    
        mean_1 = data[data[target]==1][feature].mean()
        mean_0 = data[data[target]==0][feature].mean()
    
        signal = abs(mean_1-mean_0)

        noise = data[feature].std()

        snr = signal/noise
        
        output[feature] = snr
        
    return output


def chi_square(data, features, target):
    
    output = dict()
    
    for feature in features:

        data_crosstab = pd.crosstab(data[feature],  
                                    data[target], 
                                        margins = False)

        stat, p, dof, expected = chi2_contingency(data_crosstab)
        
        output[feature] = [stat, p]
    
    return output

