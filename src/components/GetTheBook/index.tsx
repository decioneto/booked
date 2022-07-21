import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { TabContent } from '../../Pages/DetailsPage/styles'
import { Button } from '../../styles/componentStyles'
import { MarketplacesList } from './styles'

export function GetTheBook() {
  return (
    <TabContent value='getTheBook'>
      <h4 className='tab-title'>See where to find this book</h4>

      <MarketplacesList>
        <div className="list-item">
          <div className="item-head">
            <img src="" alt="" />
            <span>Amazon</span>
          </div>

          <Button className='primary-button icon'>
            <MagnifyingGlassIcon />
            Visit the site
          </Button>
        </div>
      </MarketplacesList>
    </TabContent>
  )
}