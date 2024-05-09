import http

class InsertCountries():
    table_name = "countries"
    def __init__(self, hostname, username, password, database, api) -> None:
        self.hostname = hostname
        self.username = username
        self.database = database
        self.api = api

    def get_countries(self):
        # user http requests / requests / urllib
        pass

    def create_table(self):
        """create new table with id, num"""

        # query = f'''
        # create table {self.table_name}(
        #     id serial primary key,
        #     name varchar(55),
        #     capital varchar,
        #     subregion varchar
        #
        # );
        # '''
        # cursor.execute(query) # execute the query
        # connection.commit() # make changes in the database


    def insert_countries(self):
        # follow the same structure
        # query = f'''
        #     insert into {table_name}(num)
        #     values
        #     ({num_value})
        #     '''
        #     cursor.execute(query) # execute the query
        #     connection.commit() # make changes in the database
        pass

    def __repr__(self) -> str:
        print(self.hostname)
        print(f''' the username is: {self.username} ''')
        return ""

hostname = 'aws-0-ap-southeast-1.pooler.supabase.com' # localhost
port = '5432'
username = 'postgres.fsguqhtoycgyraugmaum' # postgres
password = 's3lSJIdPSOanTnzK'
database = 'postgres'
api = 'https://restcountries.com/v3.1/all?fields=name,flags,subregion,capital'

obj = InsertCountries(hostname, username, password, database, api)
print(obj)

# SOLID Principles
# Single Responsibility
