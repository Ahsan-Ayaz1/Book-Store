import { defineStore } from "pinia";

const INITIAL_STATE = {
  _bookDetail: [],
};

export const useBookManagerStore = defineStore("bookDetailsState", {
  state: () => {
    return { ...INITIAL_STATE };
  },
  getters: {
    getBookDetails() {
      return this._bookDetail;
    },
  },
  persist: true,

  actions: {
    setbookDetails(bookDetail) {
      this._bookDetail.push(bookDetail);
    },
    deleteBookDetail(index) {
      this._bookDetail.splice(index, 1);
    },
    getBookDetail(index) {
      return this._bookDetail[index];
    },
    setBookDetail(index, bookDetail) {
      this._bookDetail[index] = bookDetail;
    },
  },
});
