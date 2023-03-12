import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {searchInputProducts} = props
    searchInputProducts(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput(event.target.value)
    }
  }

  const renderSearchFilteredProducts = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          value={searchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  //   Write this down in notes
  const renderCategoryFilteredProducts = () => {
    const {categoryOptions} = props

    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">
          {categoryOptions.map(eachCategory => {
            const {categoryFilteredProducts, categoryInputId} = props

            const onClickCategoryInput = () => {
              categoryFilteredProducts(eachCategory.categoryId)
            }

            const categoryClassName =
              categoryInputId === eachCategory.categoryId
                ? `category-name active-category-name`
                : `category-name`

            return (
              <li
                className="category-item"
                key={eachCategory.categoryId}
                onClick={onClickCategoryInput}
              >
                <p className={categoryClassName}>{eachCategory.name}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderRatingFilteredProducts = () => {
    const {ratingsList} = props

    return (
      <>
        <h1 className="rating-heading">Ratings</h1>
        <ul className="ratings-list">
          {ratingsList.map(eachRating => {
            const {ratingFilteredProducts, ratingInputId} = props

            const onClickRating = () => {
              ratingFilteredProducts(eachRating.ratingId)
            }

            const ratingClassName =
              ratingInputId === eachRating.ratingId
                ? `and-up active-rating`
                : `and-up`

            return (
              <li
                key={eachRating.ratingId}
                className="rating-item"
                onClick={onClickRating}
              >
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="rating-img"
                />
                <p className={ratingClassName}>&Up</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const onClickClearFilter = () => {
    const {clearFilter} = props
    clearFilter()
  }

  return (
    <div className="filters-group-container">
      {renderSearchFilteredProducts()}
      {renderCategoryFilteredProducts()}
      {renderRatingFilteredProducts()}
      <button
        type="button"
        onClick={onClickClearFilter}
        className="clear-filters-btn"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
