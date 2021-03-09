import Axios from "axios";
const product = {
  namespaced: true,
  state: () => {
    return {
      product: [],
    };
  },
  mutations: {},
  actions: {
    setProduct(context, data) {
      let byCategory = data.category
        ? `searchParams=id_category&search=${data.category}`
        : `searchParams=id_category&search=1`;
      let pagination = data.page ? `&page=${data.page}` : `page=1`;
      let order =
        data.order && data.orderMethod
          ? `&param=${data.order}&sort=${data.orderMethod}`
          : "";
      return new Promise((resolve, reject) => {
        Axios.get(
          `${process.env.VUE_APP_BACKEND}/api/products?${byCategory}${pagination}${order}`,
          {
            headers: {
              token: context.getters.getToken,
            },
          }
        )
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
    insertData(context, data) {
      let newData = new FormData();
      newData.append("productName", data.name);
      newData.append("productSize", data.productSize);
      newData.append("productCategory", data.category);
      newData.append("price", data.price);
      newData.append("description", data.desc);
      newData.append("stock", data.stock);
      newData.append("delivery", data.deliv);
      newData.append("image", data.image);
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_BACKEND}/api/products`, newData, {
          headers: {
            token: context.getters.getToken,
          },
        })
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            console.error(err.response);
            reject(err.response);
          });
      });
    },
    updateData(context, data) {
      let newData = new FormData();
      newData.append("productName", data.name);
      newData.append("productSize", data.productSize);
      newData.append("productCategory", data.category);
      newData.append("price", data.price);
      newData.append("description", data.desc);
      newData.append("stock", data.stock);
      newData.append("delivery", data.deliv);
      if (data.image) {
        newData.append("image", data.image);
      }
      return new Promise((resolve, reject) => {
        Axios.patch(
          `${process.env.VUE_APP_BACKEND}/api/products/${data.id}`,
          newData,
          {
            headers: {
              token: context.getters.getToken,
            },
          }
        )
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err.response);
          });
      });
    },
  },
  getters: {
    getToken(state, getters, rootState, rootGetters) {
      return rootGetters["auth/getToken"];
    },
  },
};
export default product;
