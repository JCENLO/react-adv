import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div 
            // className='bg-dark'
        >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={ product }>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white' activeClass="active"/>
                    <ProductCard.Buttons className='custom-button' />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className='bg-dark'
                    // style={{ width: '200px' }}
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' activeClass="active"/>
                    <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{ backgroundColor: 'rgb(16, 163, 127)' }}
                >
                    <ProductImage style={{marginBottom: '20px'}} />
                    <ProductTitle style={{fontWeight: 'bold', color: 'white'}}/>
                    <ProductButtons style={{
                        // background: 'blue',
                  
                        borderColor: 'white'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
