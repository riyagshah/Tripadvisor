<TAWrapper>
              {TAdata?.map(e => (
                  <div style={{border:'1px solid green'}}>
                      {/* <img height="300px" width="300px" src={e.imageUrl} alt="" /> */}
                      <Carousel height="300px" width="300px" data={newdata} alt="" />
                      

                      <h5>{e.name}</h5>
                      <div style={{ display: "flex",alignItems:'center',marginTop:"-15px" }}>
                          <img height="20px" width="50px" src={require('../Assets/images/miniDots.png')} alt="" />
                          <p style={{fontSize:'10px'}}>{Math.floor(Math.random() * 100)+50}</p>
                      </div>
                      <p style={{fontSize:'12px'}}>{e.category}</p>
                  </div>
              ))}
        </TAWrapper>