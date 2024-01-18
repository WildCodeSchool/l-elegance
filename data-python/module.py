import pandas as pd
def tri(question_keys, df_loreal):
  if question_keys['cancer']:
    print(None)
  if question_keys['chimio']:
    df = df_loreal[df_loreal['details'].str.contains('moistur', case=False)]
    if question_keys['demange']:
      df = df[df['ingredients'].str.contains('cocoa', case=False)]
    if question_keys['rougeur'] and df.shape[0]>4:
      df = df[df['details'].str.contains(' red')]
    if question_keys['pigment'] and df.shape[0]>4:
      df = df[df['details'].str.contains('SPF 50', case=False)]
  elif question_keys['radio']:
    df = df_loreal[df_loreal['details'].str.contains('SPF', case=False)]
    if question_keys['pele']:
      df = df[df['details'].str.contains('neutral', case=False)]
    if question_keys['irrit'] and df.shape[0]>4:
      df = df[df['ingredients'].str.contains('cocoa', case=False) | df['ingredients'].str.contains('aloe', case=False)]
    if question_keys['seche'] and df.shape[0]>4:
      df = df[df['details'].str.contains('moistur', case=False)]
    if question_keys['desquema'] and df.shape[0]>4:
      df = df[df['ingredients'].str.contains('shea', case=False) | df['ingredients'].str.contains('niacin', case=False) | df['ingredients'].str.contains('ceramid', case=False)]
  elif question_keys['immuno']:
    df = df[df['details'].str.contains('acne', case=False) & df['ingredients'].str.contains('niacin', case=False)]
  if question_keys['alopecie'] :
    df = pd.concat([df_loreal[df_loreal['category'].str.contains('shampoo', case=False) & (~df_loreal['ingredients'].str.contains('SODIUM LAURETH SULF', case=False))].iloc[0:4,:], df], axis=0)
  if question_keys['odora'] and df.shape[0]>4:
    df = df[~df['ingredients'].str.contains('parf', case=False)]
  return df