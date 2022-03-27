import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <hr />
      <div>
        <h3>ReactJSকিভাবে কাজ করে?</h3>
        <p>ReactJS হচ্ছে javascript এর এমন একটি component library যেটা কোনো web page কে ছোট ছোট ভাগে কেটে ফেলে এবং web page কে বিনা refresh এ চালাতে পারে।এটি  website  এত data change করতে গেলে সম্পূর্ণ site টি reload না করে শুধু যে স্থানে change হয়েছে সেটাকে শুধু re render করে change করে যার জন্য সম্পূর্ণ site reload হয় না। Refresh বিহীন  website  কে কাজ করাতে react মূলত একটি virtual  dom ব্যবহার করে।এই virtual dom এর ভিতর React webpage এর সব কিছু object  আকারে সাজিয়ে রাখে। যখন webpage এর data তে কোনো change  আসে তখন এটা আবার নতুনভাবে আরেকটা ওয়েবপেজ এর data নিয়ে  object বানায়। এখন যখন reload করার সময় আসে  তখন react তার আগের object data এর সাথে নতুন পাওয়া object ডাটার তুলনা করে এবং শুধু মাত্র যেখানে যেখানে   data match করবে না সেখানে সেখানে page কে  re render  করে data update করে দেয়</p>
      </div>
      <hr />
      <div>
        <h3>Props ও state এর মধ্যে পার্থক্য কি?</h3>
        <p>কোন সময় /কি করলে wabepage এর data এর অবস্থা কি হবে তা ম্যানেজ করতে state ব্যবহার করা হয়। এইটা read writewrite উভয় করা যায়। 
        props হচ্ছে এক component থেকে আরেক component এ ডাটা আদান প্রদান করার একটি মাধ্যম। এইটা দিয়ে শুধু data read করা যায়।</p>
      </div>
      <hr />
      <div>
        <h3>Usestate কিভবে কাজ করে?</h3>
        <p>usestate হচ্ছে ওয়েবসাইট এর ডাটা মেনেজ করতে ব্যবহার করা হয়। এটা মুলত একটা function যা প্যারামিটার আকারে initial state নেয়। Return করার সময় এটি একটি array দেয় যার ভিতরে ২টি ইলিমেন্ট থাকে। ১ম ইলিমেন্ট থেকে আমাদের প্যারামিটার আকারে আমাদের ডাটা পাওয়া যায় এবং ২য় ইলিমেন্ট থেকে একটি  ফাংশন পাওয়া যায় যেটি আমাদের state পরিবর্তন করতে ব্যবহার করা হয়।</p>
      </div>
    </div>
  );
}

export default App;
