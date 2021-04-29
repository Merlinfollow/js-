/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-24 17:25:36
 * @LastEditTime: 2021-04-26 15:05:30
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test23.js
 */
 //归并排序
 static void funMergeSort(int[] array) {

  if (array.length > 1) {

      int length1 = array.length / 2;
      int[] array1 = new int[length1];
      System.arraycopy(array, 0, array1, 0, length1);
      funMergeSort(array1);

      int length2 = array.length - length1;
      int[] array2 = new int[length2];
      System.arraycopy(array, length1, array2, 0, length2);
      funMergeSort(array2);

      int[] datas = merge(array1, array2);
      System.arraycopy(datas, 0, array, 0, array.length);
  }

}

static voild funMergeSort(int[] array){
  if(array.length > 1){
    int length1 = array.length / 2;
    int[] array1 = new int[length1];
    System.arraycopy(array,0,array1,0,length1);
    funMergeSort(array1);

    int length2 = array.length - length1;
    int [] array2 = new int[lnegth2];
    

  }
}

//合并两个数组
static int[] merge(int[] list1, int[] list2) {

  int[] list3 = new int[list1.length + list2.length];

  int count1 = 0;
  int count2 = 0;
  int count3 = 0;

  while (count1 < list1.length && count2 < list2.length) {

      if (list1[count1] < list2[count2]) {
          list3[count3++] = list1[count1++];
      } else {
          list3[count3++] = list2[count2++];
      }
  }

  while (count1 < list1.length) {
      list3[count3++] = list1[count1++];
  }

  while (count2 < list2.length) {
      list3[count3++] = list2[count2++];
  }

  return list3;
}

static int[] merge(int[] list1,int[] list2){
  int[] list3 = new int[list1.length + list2.length];
  int count1 = 0;
  int count2 = 0;
  int count3 = 0;

  while(count1 < list1.length && count2 < list2.length){

  }
}


