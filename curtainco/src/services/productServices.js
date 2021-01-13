import api from "../config/api";
import {
    capitalize,
    isPhotoPresent,
    setErrorSnackBar,
    setSuccessSnackBar,
} from "../helpers/appHelpers";
import { checkIfAnyFieldsEmptyOnProductObject } from "../helpers/productHelpers";
import { uploadPhotoToS3 } from "./uploadServices";

async function getAllProducts() {
    const response = await api.get("/products");
    return response;
}

async function createProduct(newProduct) {
    console.log(newProduct);
    const response = await api.post("/products", newProduct);
    return response;
}

async function updateProduct(updatedProduct) {
    const response = await api.put(
        `/products/${updatedProduct._id}`,
        updatedProduct
    );
    return response;
}

async function deleteProduct(productToDelete) {
    const response = await api.delete(
        `/products/${productToDelete._id}`,
        productToDelete
    );
    return response;
}

async function createAccessory(newAccessory) {
    const response = await api.post("/accessory", newAccessory);
    return response;
}

async function submitProductToDbAndUpdateState(
    updateOrAdd,
    product,
    dispatch,
    ACTIONS,
    setResetFile,
    setPhoto,
    photo,
    resetProductForm
) {
    // UPDATE THE PRODUCT ON THE DB
    // IF SUCCESSFUL, UPDATE PRODUCT IN GLOBAL STATE AND SHOW SUCCESS SNACKBAR
    let editProdError = false;
    let tempProduct = { ...product };
    let userIsUpdatingPhoto = isPhotoPresent(photo);

    // UPLOAD THE PHOTO TO S3
    if (userIsUpdatingPhoto) {
        console.log("User wants to update photo");
        try {
            let s3Resp = await uploadPhotoToS3(photo);
            console.log(s3Resp);
            if (s3Resp.status === 201) {
                tempProduct.imgUrl = s3Resp.data.image.location;
                setResetFile(true);
                setPhoto({});
            }
        } catch (error) {
            // BLOCK THE UPDATE TO DATABASE IF THE IMAGE UPLOAD FAILED
            // editProdError WILL STILL BE FALSE IF THEY HAVEN'T UPLOADED A PHOTO
            // OR THERE WAS NO ERROR WHEN UPLOADING IT
            return `Something went wrong with ${capitalize(updateOrAdd)} ${tempProduct.category
                } photo. ${error}`;
        }
    }

    // CHECK IF ANY FIELDS ARE EMPTY IN THE FORM
    let emptyFields = checkIfAnyFieldsEmptyOnProductObject(tempProduct);
    if (emptyFields) {
        if (
            !window.confirm(
                "There are empty fields on the submission. Are you sure you wish to proceed?"
            )
        ) {
            return;
        }
    }

    try {
        let resp;
        if (updateOrAdd === "add") {
            resp = await createProduct(tempProduct);
        } else {
            resp = await updateProduct(tempProduct);
        }
        console.log(resp);
        if (
            (updateOrAdd === "add" && resp.status === 201) ||
            (updateOrAdd === "update" && resp.status === 200)
        ) {
            dispatch({
                type:
                    updateOrAdd === "add"
                        ? ACTIONS.ADD_PRODUCT
                        : ACTIONS.UPDATE_PRODUCT,
                payload: tempProduct,
            });
            setSuccessSnackBar(
                dispatch,
                `${capitalize(tempProduct.category)} successfully ${updateOrAdd === "add" ? "added" : "updated"
                }`
            );
            setResetFile(true);
            setPhoto({});
            if (updateOrAdd === "add") resetProductForm();
            return resp;
        }
    } catch (error) {
        editProdError = `Something went wrong with ${capitalize(updateOrAdd)} ${tempProduct.category
            }. ${error}`;

        setErrorSnackBar(
            dispatch,
            `Something went wrong with ${capitalize(updateOrAdd)} ${tempProduct.category
            }. ${error}`
        );
    }
    return editProdError;
}

export {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    createAccessory,
    submitProductToDbAndUpdateState,
};
