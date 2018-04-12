import React from 'react';
import {AutoSizer, InfiniteLoader, List} from 'react-virtualized';
import data from './data';

const TOTAL = data.list.length; // total of rows shown un the list

class MediaList extends React.Component {
  constructor() {
    super();
    this.data = data.list;
    this.count = 10;
    this.loaded = [];

    this.rowRenderer = this.rowRenderer.bind(this);
    this.getMediaLoaded = this.getMediaLoaded.bind(this);
    this.loadMoreRows = this.loadMoreRows.bind(this);


    let list = this.data.slice(0, 10);
    this.loaded = this.loaded.concat(list);

  }


  getMediaLoaded(index) {
    console.log('getMediaLoaded');
    return !!this.loaded[index];
  }

  loadMoreRows({startIndex, stopIndex}) {
    console.log('loadMoreRows');
    console.log(startIndex, stopIndex, this.count);
    if (this.count < TOTAL) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {

          let list = this.data.slice(startIndex, stopIndex);
          this.loaded = this.loaded.concat(list);
          this.count = this.count + 10;


          console.log('LOADED', this.loaded);
          resolve(this.loaded);
        }, 500);
      });
    }
    return null;
  }

  rowRenderer(props) {
    console.log('rowRenderer');
    let content;
    const media = this.loaded[props.index];
    if (media) {
      content = <div className="row" key={props.key}>{props.index} - {media.uid}</div>;
    }
    else {
      content = <div className="row" key={props.key}>{props.index} Loading...</div>;
    }

    return content;
  }

  render() {
    console.log('asdadadas');
    return (
      <div id="list-container">
        <div id="media-list-header">
          <div className="list-header-item-wrapper">
            <div></div>
            <div></div>
            <div className="item">TITLE</div>
            <div className="item">DATE UPLOADED</div>
          </div>
        </div>
        <div>

          <InfiniteLoader
            isRowLoaded={this.getMediaLoaded}
            loadMoreRows={this.loadMoreRows}
            rowCount={10}>
            {({onRowsRendered, registerChild}) => (
              <AutoSizer disableHeight>
                {({width}) => (
                  <List
                    ref={registerChild}
                    className="list-container"
                    height={300}
                    onRowsRendered={onRowsRendered}
                    rowCount={TOTAL}
                    rowHeight={30}
                    rowRenderer={this.rowRenderer}
                    width={width}
                  />
                )}
              </AutoSizer>
            )}
          </InfiniteLoader>

        </div>
      </div>
    );
  }
}

export default MediaList;

