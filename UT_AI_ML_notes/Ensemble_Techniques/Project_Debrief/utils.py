__all__ = ['read_input', 'sanity_check_1', 'univariate_numerical', 'categorical_bar_plot']

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

def read_input(input_dir, input_file, sep=","):
    
    df = pd.read_csv(os.path.join(input_dir, input_file),
                    sep=sep)
    
    return df

def sanity_check_1(df):
    dtype = df.dtypes
    null = df.isnull().sum()
    unique = df.nunique()

    result_df = pd.concat([dtype, null, unique], axis=1)
    result_df.columns = ['dtype', 'null', 'unique']
    result_df['null_%'] = result_df['null'].values / len(df)
    
    
    return result_df


def univariate_numerical(df):
    univariate_df = pd.concat([df.describe(percentiles=[i/10 for i in range(1, 10)]).T, df.skew()], axis=1)
    univariate_df.rename(columns={0:"skew"}, inplace=True)
    return univariate_df


def categorical_bar_plot(df, driver):
    _a = df[driver].value_counts(normalize=True).reset_index()
    _a.columns = [driver, '%']
    ax = sns.barplot(x=driver, y='%',data=_a)
    for p in ax.patches:
        percentage = '{:.1f}%'.format(100 * p.get_height())
        x = p.get_x() + p.get_width()/2
        y = p.get_height()+0.01
        ax.annotate(percentage, (x, y))
    plt.show()