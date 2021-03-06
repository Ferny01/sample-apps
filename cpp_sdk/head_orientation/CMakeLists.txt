cmake_minimum_required(VERSION 3.12)
project(
        cpp_sample_apps_head_orientation
        DESCRIPTION "Trueface C++ SDK sample app, head orientation"
        LANGUAGES CXX
)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14 -Ofast -ffast-math")
if (UNIX AND NOT APPLE)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fopenmp")
endif()

set(CMAKE_POSITION_INDEPENDENT_CODE ON)

set(TRUEFACE_SDK_DIR "${CMAKE_CURRENT_LIST_DIR}/../trueface_sdk")

include_directories(${TRUEFACE_SDK_DIR})
link_directories(${TRUEFACE_SDK_DIR})

if(DEFINED ENV{OpenCV_PATH})
    find_package( OpenCV REQUIRED PATHS $ENV{OpenCV_PATH})
else()
    find_package( OpenCV REQUIRED)
endif()

add_executable(cpp_sample_app_head_orientation src/main.cpp)
target_link_libraries(cpp_sample_app_head_orientation tf ${OpenCV_LIBS})