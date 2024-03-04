import { FC } from 'react';
import { prisma } from '@/prisma';
import Image from 'next/image';
import { InputImage } from '@/components';

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
          <InputImage inputName={'productImage'} imgWidth={250} imgHeight={300} />
        </div>
        <div>
          <div>
            <InputImage inputName={'productImage'} imgWidth={200} imgHeight={250} />
            <InputImage inputName={'productImage'} imgWidth={200} imgHeight={250} />
            <InputImage inputName={'productImage'} imgWidth={200} imgHeight={250} />
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