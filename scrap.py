import requests

for i in range(0,10000):
    try:
        if(i<10):
            url = "http://unisoft.krmangalam.edu.in/Upload/REG00000" + str(i) + ".jpg"
        elif(i<100):
            url = "http://unisoft.krmangalam.edu.in/Upload/REG0000" + str(i) + ".jpg"
        elif(i < 1000):
            url = "http://unisoft.krmangalam.edu.in/Upload/REG000" + str(i) + ".jpg"
        elif(i < 10000):
            url = "http://unisoft.krmangalam.edu.in/Upload/REG00" + str(i) + ".jpg"
        else:
            continue

        response = requests.get(url)

        if response.status_code == 200:
            print("Getting image of REG00" + str(i))
            file = open("./Images/" + "img"+str(i)+".jpg", "wb")
            file.write(response.content)
            file.close()

        elif response.status_code == 404:
            print('Not Found.')

    except:
        continue
