import React, { Component } from 'react'

export class Pinterest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPicture : ''
    }
    this.selectPicture = this.selectPicture.bind(this)
  }

  selectPicture(picture) {
    console.log("Parent's " + picture)
    this.setState({
      selectedPicture : picture
    })
  }

  render() {
    return(
      <div>
        <ImageListings officiatePictureClicked={this.selectPicture}/>
        <PictureDetail displayedPicture={this.state.selectedPicture}/>
      </div>

    )
  }
}

class ImageListings extends Component {
  constructor(props) {
    super(props)
    this.pictureClicked = this.pictureClicked.bind(this)
    this.state = {
      pictureList : ["https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
       "https://images.pexels.com/photos/216105/pexels-photo-216105.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/210065/pexels-photo-210065.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
         "https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"]
    }
  }
  pictureClicked(picture) {
    console.log("Child's " + picture)
    this.props.officiatePictureClicked(picture)
  }
  render() {

    let pictures = this.state.pictureList
    let pictureList = pictures.map(function(picture,index) {
      return <div key={index + Date.now()} onClick={(pictureName) => this.pictureClicked(picture)}><img className="picture" src={picture}/></div>
    }.bind(this))
    return(
      <div className="pictureContainer">
        {pictureList}
      </div>
    )
  }
}

class PictureDetail extends Component {

  render() {

    return(
      <div className="pictureContainer">
      <img className="picture"src={this.props.displayedPicture}/>
      </div>
    )
  }
}
