import { FC } from 'react';
import { prisma } from '@/prisma';
import Image from 'next/image';

const ProductsPage: FC = async () => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <div>
      <form action=''>
        <div>
          <Image src={''} alt={''} />
        </div>
        <div>
          <div>
            <input type="file" name="productImage" />
            <input type="file" name="productImage" />
            <input type="file" name="productImage" />
          </div>
          <div>
            <input type="text" name='name' placeholder='Name...' />
            <input type="text" name='short-desc' placeholder='short description' />
            <input type="text" name='description' placeholder='Description..' />
            <input type="text" name='price' placeholder='price' />
          </div>
        </div>
        <div>
          <button>Available</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}



export default ProductsPage