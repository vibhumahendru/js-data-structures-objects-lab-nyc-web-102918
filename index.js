// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  let answer = Object.assign({}, driver, {[key]: value})

   return answer
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let answer = Object.assign({}, driver)
  delete answer[key]
  return answer

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
