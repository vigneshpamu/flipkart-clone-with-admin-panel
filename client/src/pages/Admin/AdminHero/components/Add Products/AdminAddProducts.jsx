/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import './style.css'
import { Toaster, toast } from 'react-hot-toast'
import { app } from '../../../../../firebase'
import { useAddProductNewMutation } from '../../../../../slices/addProduct/addProductApiSlice'

const data2 = {
  name: 'REDMI 10 Power (Power Black, 128 GB)  (8 GB RAM)',
  description:
    '/*Powerful Battery*/ Built with a battery capacity of up to 6000 mAh, the REDMI 10 Power Smartphone is ideal for you if you like to continuously stream, work, play games, and listen to music on the go. Also, its up to 18 W fast charging features helps juice up this smartphone in a short span.',
  highlights: [
    '8 GB RAM | 128 GB ROM',
    '17.02 cm (6.7 inch) Display',
    '50MP Rear Camera | 5MP Front Camera',
    '6000 mAh Battery',
    'EMI starting from ₹422/month',
    'Cash on Delivery',
  ],
  specifications: [
    {
      type: 'In The Box',
      desc: 'Handset| Adapter | USB Type-C Cable | SIM Eject Tool | Protective Case | Quick Start Guide | Warranty Card',
    },
    {
      type: 'Model Number',
      desc: '220333QBI',
    },
    {
      type: 'Model Name',
      desc: 'REDMI 10 Power',
    },
    {
      type: 'Color',
      desc: 'Power Black',
    },
    {
      type: 'Browse Type',
      desc: 'Smartphones',
    },
  ],
  price: 18999,
  discountedPrice: 11998,
  coverImg:
    'https://firebasestorage.googleapis.com/v0/b/flipkart-clone-e0477.appspot.com/o/1697271733157cover.webp?alt=media&token=fb7b6bad-8034-4422-aec3-158b656da71a',
  images: [
    'https://firebasestorage.googleapis.com/v0/b/flipkart-clone-e0477.appspot.com/o/1697271733157cover.webp?alt=media&token=fb7b6bad-8034-4422-aec3-158b656da71a',
    'https://firebasestorage.googleapis.com/v0/b/flipkart-clone-e0477.appspot.com/o/16972717381171.webp?alt=media&token=1c009511-8137-4e81-babc-cd36ccfc4204',
    'https://firebasestorage.googleapis.com/v0/b/flipkart-clone-e0477.appspot.com/o/16972717381172.webp?alt=media&token=d2706e3a-71db-4a20-9a61-d5b3c88a4844',
    'https://firebasestorage.googleapis.com/v0/b/flipkart-clone-e0477.appspot.com/o/16972717381183.webp?alt=media&token=849531d8-aef2-4c8f-8cf2-1fe310eec9b3',
  ],
  brand: {
    name: 'Mi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png',
  },
  productCategory: 'phone',
  bankOffers: [
    'Bank Offer 10% off on ICICI Bank Credit Card, up to ₹1000 on orders of ₹5,000',
    'Bank Offer 10% off on Select ICICI Bank Credit Cards, up to ₹1000 on orders of ₹5,000',
    'Bank Offer 10% off on Axis Bank and Citi Credit Card, up to ₹1000 on orders of ₹5,000',
    'Special Price Get extra ₹6902 off (price inclusive of cashback/coupon)',
  ],
  stock: 5,
  warranty: 1,
  ratings: 4.2,
  fassured: true,
  reviews: [],
  user: '652836ee052fc16fa92897cc',
}

const AdminAddProducts = () => {
  const [fileUploadError, setFileUploadError] = useState(false)
  const [filePec, setFilePec] = useState(0)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [files, setFiles] = useState([])
  const [imageUploadError, setImageUploadError] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(false)

  const [addProduct] = useAddProductNewMutation()

  // Product Name
  const [productName, setProductName] = useState('')

  // Product Description
  const [productDesc, setProductDesc] = useState('')

  // Product Brand
  const [productBrand, setProductBrand] = useState({
    name: '',
    logo: '',
  })

  // Product Actual Price
  const [productActualPrice, setProductActualPrice] = useState(0)

  // Product Discounted Price
  const [productDiscountedPrice, setProductDiscountedPrice] = useState(0)

  // Product Category
  const [productCategory, setProductCategory] = useState('')

  // Product Stock
  const [productStock, setProductStock] = useState(1)

  // Product Warranty
  const [productWarranty, setProductWarranty] = useState(1)

  // Product User
  const [productCreator, setProductCreator] = useState('')

  // Highlights State
  const [allHighlights, setAllHighlights] = useState([])
  const [highlight, setHighlight] = useState('')

  // Highlights State
  const [allSpecifications, setAllSpecifications] = useState([])
  const [specsDesc, setSpecsDesc] = useState('')
  const [specsType, setSpecsType] = useState('')

  // Product Rating
  const [productRating, setProductRating] = useState(1)

  // Product FAssured State
  const [selectedOption, setSelectedOption] = useState(false)

  // Product Cover Img Url
  const [coverImg, setCoverImg] = useState(undefined)
  const [coverImgUrl, setCoverImgUrl] = useState('')

  // Product All Image Url
  const [allImageUrl, setAllImageUrl] = useState([])

  // Product Bank Offer
  const [productBankOffer, setProductBankOffer] = useState('')
  const [allBankOffer, setAllBankOffer] = useState([])

  const onAddProduct = async () => {
    if (!productName) {
      toast.error('Product Name is required')
    } else if (!productDesc) {
      toast.error('Product Description is required')
    } else if (!productActualPrice) {
      toast.error('Product Actual Price is required')
    } else if (!productDiscountedPrice) {
      toast.error('Product Discounted Price is required')
    } else if (!productCategory) {
      toast.error('Product Category is required')
    } else if (!productStock) {
      toast.error('Product Stock is required')
    } else if (!productWarranty) {
      toast.error('Product Warranty is required')
    } else if (!productCreator) {
      toast.error('Product Creator is required')
    } else if (!allHighlights) {
      toast.error('Product Highlights are required')
    } else if (!allSpecifications) {
      toast.error('Product Specifications are required')
    } else if (!productRating) {
      toast.error('Product Rating is required')
    } else if (!selectedOption) {
      toast.error('Selected Option is required')
    } else if (!coverImg) {
      toast.error('Cover Image is required')
    } else if (!allImageUrl) {
      toast.error('Image URLs are required')
    } else if (!allBankOffer) {
      toast.error('Bank Offers are required')
    } else {
      const discountAmount =
        Number(productActualPrice) - Number(productDiscountedPrice)
      const discountPercentage = (
        (discountAmount / Number(productActualPrice)) *
        100
      ).toFixed(1)

      const data = {
        name: productName,
        description: productDesc,
        highlights: allHighlights,
        specifications: allSpecifications,
        price: Number(productActualPrice),
        discountedPrice: Number(productDiscountedPrice),
        discount: Number(discountPercentage),
        coverImg: coverImgUrl,
        images: allImageUrl,
        brand: productBrand,
        productCategory: productCategory,
        bankOffers: allBankOffer,
        stock: Number(productStock),
        warranty: Number(productWarranty),
        ratings: Number(productRating),
        fassured: selectedOption,
        reviews: [],
        user: productCreator,
      }
      const res = await addProduct(data).unwrap()
      toast.success('Product Added Successfully')
      console.log(res)
    }
  }

  const handleCoverImageSubmit = () => {
    if (coverImg) {
      handleFileUpload(coverImg)
    }
  }

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setFilePec(Math.round(progress))
      },
      (error) => {
        setFileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
          setCoverImgUrl(downloadURL)
          setAllImageUrl([...allImageUrl, downloadURL])
          toast.success('Image Added Successfully')
        })
      }
    )
  }

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + allImageUrl.length <= 6) {
      setUploading(true)
      setImageUploadError(false)
      const promises = []

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]))
      }
      Promise.all(promises)
        .then((urls) => {
          setAllImageUrl([...allImageUrl, urls].flat())
          toast.success('Image Added Successfully')
          setImageUploadError(false)
          setUploading(false)
        })
        .catch((err) => {
          setImageUploadError(`Image Upload failed (2 mb max per image)`)
          setUploading(false)
        })
    } else {
      setImageUploadError(`You can only upload 6 images per listing`)
      toast.error('You can only upload 5 images per Product')
      setUploading(false)
    }
  }

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app)
      const fileName = new Date().getTime() + file.name
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(progress)
        },
        (error) => {
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAllImageUrl([...allImageUrl, downloadURL])
            resolve(downloadURL)
          })
        }
      )
    })
  }

  const handleDeleteImage = (id) => {
    console.log(id)
    const newArray = allImageUrl.filter((url, i) => i !== id)
    console.log(newArray)
    setAllImageUrl([...newArray])
    toast.error('Image Deleted Successfully')
  }

  const handleAddHighlight = () => {
    if (highlight.length > 10) {
      setAllHighlights([...allHighlights, highlight])
      setHighlight('')
    } else {
      toast.error('Please Add Proper Highlight')
    }
  }

  const handleDeleteHightLight = (id) => {
    const newArray = allHighlights.filter((url, i) => i !== id)
    setAllHighlights([...newArray])
    toast.error('Highlight Deleted Successfully')
  }

  const handleAddSpecifications = () => {
    if (!specsType || !specsDesc) {
      toast.error('Please Add All Specifications Details')
      return
    } else {
      setAllSpecifications([
        ...allSpecifications,
        {
          type: specsType,
          desc: specsDesc,
        },
      ])
      setSpecsDesc('')
      setSpecsType('')
    }
  }

  const handleDeleteSpecifications = (id) => {
    const newArray = allSpecifications.filter((url, i) => i !== id)
    setAllSpecifications([...newArray])
    toast.error('Specifications Deleted Successfully')
  }

  const handleSelectChange = (event) => {
    const value = event.target.value === 'true' // Convert the value to a boolean
    console.log(value)
    setSelectedOption(value)
  }

  const handleAddBankOffer = () => {
    if (productBankOffer.length > 10) {
      setAllBankOffer([...allBankOffer, productBankOffer])
      setProductBankOffer('')
    } else {
      toast.error('Please Add Proper Bank Offer')
    }
  }

  const handleDeleteBankOffer = (id) => {
    const newArray = allBankOffer.filter((url, i) => i !== id)
    setAllBankOffer([...newArray])
    toast.error('Bank Offer Deleted Successfully')
  }

  return (
    <div className="mainPaddedAdminRightDiv">
      <Toaster />
      <div className="maiAdminAddProductsDiv">
        <h2>Add Product</h2>
        <div className="allAdminAddProductsInputBoxes">
          <div className="addProduct1 addProductCommon">
            <div className="singleAddProductElement">
              <h3>Name</h3>
              <input
                type="text"
                placeholder="Name of the product"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>Description</h3>
              <input
                type="text"
                placeholder="Description of the product"
                onChange={(e) => setProductDesc(e.target.value)}
                value={productDesc}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>Brand</h3>
              <div className="brandAdminDoubleFlex">
                <input
                  type="text"
                  placeholder="Enter Brand of the product"
                  onChange={(e) =>
                    setProductBrand({ ...productBrand, name: e.target.value })
                  }
                  value={productBrand.name}
                />
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  id=""
                  onChange={(e) =>
                    setProductBrand({ ...productBrand, logo: e.target.value })
                  }
                  value={productBrand.logo}
                />
              </div>
            </div>
          </div>
          <div className="addProduct2 addProductCommon">
            <div className="singleAddProductElement">
              <h3>Actual Price</h3>
              <input
                type="number"
                placeholder="Name of the product"
                id=""
                onChange={(e) => setProductActualPrice(e.target.value)}
                value={productActualPrice}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>Discounted Price</h3>
              <input
                type="number"
                placeholder="Name of the product"
                id=""
                min={0}
                max={productActualPrice}
                onChange={(e) => setProductDiscountedPrice(e.target.value)}
                value={productDiscountedPrice}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>Product Category</h3>
              <input
                type="text"
                placeholder="Enter Product Category"
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}
              />
            </div>
          </div>
          <div className="addProduct3 addProductCommon">
            <div className="singleAddProductElement">
              <h3>Stock</h3>
              <input
                type="number"
                placeholder="Enter Product Stock"
                onChange={(e) => setProductStock(e.target.value)}
                value={productStock}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>Warranty</h3>
              <input
                type="number"
                placeholder="Enter Product Warranty"
                onChange={(e) => setProductWarranty(e.target.value)}
                value={productWarranty}
              />
            </div>
            <div className="singleAddProductElement">
              <h3>User</h3>
              <input
                type="text"
                placeholder="Enter User Id"
                onChange={(e) => setProductCreator(e.target.value)}
                value={productCreator}
              />
            </div>
          </div>
          <div className="highLightAndSpecsDiv addProductCommon">
            <div className="`singleAddProductElement` addNewScrollNow">
              <h3>Highlights</h3>
              <div className="addHighLightButton extraMarginTop">
                <input
                  type="text"
                  placeholder="Enter Product Highlights"
                  onChange={(e) => setHighlight(e.target.value)}
                  value={highlight}
                />
                <button onClick={() => handleAddHighlight()}>Add</button>
              </div>
              <div className="newHightlightBox">
                {allHighlights.map((item, id) => (
                  <div key={id} className="singleHighlightBox">
                    <h3>{item}</h3>
                    <p onClick={() => handleDeleteHightLight(id)}>X</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="singleAddProductElement addNewScrollNow ">
              <h3>Specifications</h3>
              <div className="singleAdminSpecsDiv addHighLightButton">
                <input
                  type="text"
                  placeholder="Enter Specs Type"
                  onChange={(e) => setSpecsType(e.target.value)}
                  value={specsType}
                />
                <input
                  type="text"
                  placeholder="Enter Specs Description"
                  onChange={(e) => setSpecsDesc(e.target.value)}
                  value={specsDesc}
                />
                <button onClick={() => handleAddSpecifications()}>Add</button>
              </div>
              <div className="newHightlightBox">
                {allSpecifications.map((item, id) => (
                  <div key={id} className="singleHighlightBox">
                    <h3>
                      {item.type} - {item.desc}
                    </h3>
                    <p onClick={() => handleDeleteSpecifications(id)}>X</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="singleAddProductElement">
              <h3>Ratings & FAssured</h3>
              <div className="fAssuredAdminDiv">
                <input
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Enter Average Rating"
                  onChange={(e) => setProductRating(e.target.value)}
                  value={productRating}
                />
                <select
                  value={String(selectedOption)}
                  onChange={handleSelectChange}
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
            </div>
          </div>
          <div className="addProduct4 addProductCommon">
            <div className="singleAddProductElement">
              <h3>Cover Image</h3>
              <div className="otherImageAdminButton">
                <input
                  type="file"
                  placeholder="Enter Product Stock"
                  accept="image/*"
                  onChange={(e) => setCoverImg(e.target.files[0])}
                />
                <button onClick={handleCoverImageSubmit}>Submit</button>
              </div>
            </div>
            <div className="singleAddProductElement">
              <div className="otherImagesAdmin">
                <h3>All Other Images</h3>
                <p>(Max Upto 5 Images)</p>
              </div>
              <div className="otherImageAdminButton">
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  placeholder="Enter Specs Type"
                  onChange={(e) => setFiles(e.target.files)}
                />
                <button onClick={handleImageSubmit}>Submit</button>
              </div>
            </div>
            <div className="singleAddProductElement">
              <h3>Images Preview</h3>
              {allImageUrl.length < 1 ? (
                <p>No Images</p>
              ) : (
                <div className="smallAdminImagesPreview">
                  {allImageUrl.map((url, id) => {
                    return (
                      <div key={url} className="mySingleImagePreview">
                        <img src={url} alt="" />
                        <p onClick={() => handleDeleteImage(id)}>X</p>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="addProduct5 addProductCommon">
            <div className="singleAddProductElement">
              <h3>Bank Offer</h3>
              <div className="addBankOfferDetails">
                <input
                  type="text"
                  placeholder="Enter Bank Offer"
                  onChange={(e) => setProductBankOffer(e.target.value)}
                  value={productBankOffer}
                />
                <button onClick={handleAddBankOffer}>Add Offer</button>
              </div>
              <div className="sampleBankOfferDiv">
                {allBankOffer.map((item, id) => (
                  <div key={id} className="singleHighlightBox">
                    <h3>{item}</h3>
                    <p onClick={() => handleDeleteBankOffer(id)}>X</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="addProduct6 addProductCommon">
            <div className="singleAddProductElement">
              <button onClick={onAddProduct} className="submitButtonAdmin">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProducts
