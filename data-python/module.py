def tri(question_keys, df_loreal):
    if question_keys['cancer']:
        print(None)
    if question_keys['chimio']:
        df = df_loreal[df_loreal['details'].str.contains('moistur', case=False)]
        if question_keys['demange']:
            df = df_loreal[df_loreal['ingredients'].str.contains('cocoa', case=False)]
        if question_keys['rougeur']:
            df = df_loreal[df_loreal['details'].str.contains(' red')]['details']
        if question_keys['pigment']:
            df = df_loreal[df_loreal['details'].str.contains('SPF 50', case=False)]
    elif question_keys['radio']:
        df = df_loreal[df_loreal['details'].str.contains('SPF', case=False)]
        if question_keys['pele']:
            df = df_loreal[df_loreal['details'].str.contains('neutral', case=False)]
        if question_keys['irrit']:
            df1 = df_loreal[df_loreal['ingredients'].str.contains('cocoa', case=False) | df_loreal['ingredients'].str.contains('aloe', case=False)]
        if question_keys['seche']:
            df2 = df_loreal[df_loreal['details'].str.contains('moistur', case=False)]
        if question_keys['desquema']:
            df3 = df_loreal[df_loreal['ingredients'].str.contains('shea', case=False) | df_loreal['ingredients'].str.contains('niacin', case=False) | df_loreal['ingredients'].str.contains('ceramid', case=False)]
    elif question_keys['immuno']:
        df_loreal[df_loreal['details'].str.contains('acne', case=False) & df_loreal['ingredients'].str.contains('niacin', case=False)]
    if question_keys['alopecie']:
        df_loreal[df_loreal['category'].str.contains('shampoo', case=False) & (~df_loreal['ingredients'].str.contains('SODIUM LAURETH SULF', case=False))]['ingredients'].iloc[3]
    if question_keys['odora']:
        df_loreal[~df_loreal['ingredients'].str.contains('parf', case=False)]
    return df