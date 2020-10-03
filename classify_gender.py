import cvlib as cv
import cv2
import numpy as np
import glob

students=glob.glob("./Images/*.jpg")

# print(students)

# exit()

n=0

for pics in students:

    try:
        image = cv2.imread(pics)

        label, confidence = cv.detect_gender(image, enable_gpu=True)
        # print(confidence)

        idx = np.argmax(confidence)
        label = label[idx]
        gender_acc = "{}: {:.2f}%".format(label, confidence[idx] * 100)

        # cordinates for cv2.imwrite
        padding = 10
        startX = max(0, (image[0]-padding).all())
        startY = max(0, (image[1]-padding).all())
        if startY - 10 > 10:
            Y = startY - 20
        else:
            Y = startY + 20

        cv2.putText(image, gender_acc, (startX, Y),cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 113, 3), 2)

        # display output
        # press any key to close window
        # cv2.imshow("gender detection", image)
        # cv2.waitKey()
        # save output

        if label == "male":
            print(gender_acc)
            file = "./Classified_Images/male/img_%d.jpg"%n
            cv2.imwrite(file , image)
        elif label == "female":
            print(gender_acc)
            file = "./Classified_Images/female/img_%d.jpg"%n
            cv2.imwrite(file, image)
        # else:
        #     print(gender_acc)
        #     file = "./Classified_Images/others/img_%d.jpg"%n
        #     cv2.imwrite(file, image)

        n=n+1

    except Exception as e:
        print(e)
        # pass
        continue


# release resources
cv2.destroyAllWindows()
print("--------------------------------------------------------------------------------------------------------------------------------------------------------")
print("--------------------------------------------------------------------------------------------------------------------------------------------------------")
print("--------------------------------------------------------------------------------------------------------------------------------------------------------")
print("OVER")
