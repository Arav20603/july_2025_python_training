from db_methods2 import DataQuery

query = DataQuery()
for row in query.selectData():
    print(row)